import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer 194xaxDRb22MU5w3rWEtSrz_4EMQwsQlx2eGyMggo3M2Rk8XZzK_lgy9MIH0aEEpZzRv2H6uiKvDnXMAKSjZfmla0WbulcvQMqHmj79WqnYlF94AwwQGJX2-Z3o8XnYx'
    },
});