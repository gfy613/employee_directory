import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchUsers: function() {
    return axios
      .get("https://randomuser.me/api/?results=50")
      .then(res => {
        const users = res.data.results;
        console.log(res.data)
        console.log(res.data.results[0].gender)
        return users.map(user => {
          return {
            gender: user.gender,
            image: user.picture.thumbnail,
            dob: user.dob,
            phone: user.phone,
            email: user.email,
            firstname: user.name.first,
            lastname: user.name.last
          };
        });
      });
  }
};
