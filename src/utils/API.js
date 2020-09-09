import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchUsers: function() {
    return axios
      .get("https://randomuser.me/api/?results=50&nat=us")
      .then(res => {
        console.log(res.data.results)
        const users = res.data.results;
        return users.map(user => {
          return {
            gender: user.gender,
            image: user.picture.thumbnail,
            dob: user.dob.age,
            phone: user.phone,
            email: user.email,
            firstname: user.name.first,
            lastname: user.name.last
          };
        });
      });
  }
};
