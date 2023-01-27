import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { userData: null }
  }
  loadUserData() {
    this.setState({ userData: null })
    this.fetchID = fetchUserData(this.props.username, (userData) => {
      this.setState({ userData })
    })

  }
  componentDidMount() {
    this.loadUserData();
  }
  componentWillUnmount() {
    cancelFetch(this.fetchID);
  }
  componentDidUpdate(prevProps) {
    if(this.props.username !== prevProps.username){
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }
  render() {
    const isLoading = this.state.userData === null ? true : false;
    const name = isLoading === true ? 'Loading, please wait...' : this.state.userData.name;
    const bio = isLoading === true ? 'biographical data transpositioning...' : this.state.userData.bio;
    const friends = isLoading === true ? [] : this.state.userData.friends;
    let className = 'Profile';
    let profile;
    if (isLoading) {
      className += ' loading';
    } else {
      profile = <img src={this.state.userData.profilePictureUrl} alt="" />;
    }
    
    return (
      <div className={className}>
        <div className="profile-picture">{profile}</div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}