import axios from 'axios';
import config from '../config';

export function getReferralCount(referralCode){

  let vl_config = {
    headers: {
      "Content-Type": "application/json",
      apiToken: config.viralLoopAPI,
   }
  }

  return(dispatch) => {
    axios.get(`https://app.viral-loops.com/api/v2/participant_data`, vl_config)
      .then((res) => {
        let allUsers = res.data.data;
        let foundUser = allUsers.find((userObj) => {
            return userObj.user.referralCode === referralCode;
        })
        let userReferrals = foundUser.counters.referrals.total;
        dispatch(returnReferralCount(userReferrals))
      })
      .catch((err) => {
        dispatch(returnReferralCount('error: ' + err))
      })
  }
}

export function returnReferralCount(referralCount) {
  return {
    type: "UPDATE_REFERRAL_COUNT",
    referralCount: referralCount,
    freeMonths: referralCount+1
  }
}
