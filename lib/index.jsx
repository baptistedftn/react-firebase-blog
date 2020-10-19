import React, { Component } from 'react';
import firebase from 'firebase';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MDReactComponent from 'markdown-react-js';
import { FormateDate } from './scripts';

class FireBlog extends Component {
  componentWillMount() {
    var fire = firebase.initializeApp(this.props.config);
    fire.database().ref('/posts').on('value', function(snapshot) {
      this.setState({
        'data': snapshot.val()
      });
    });
  }

  get_post(Post) {
    return (
        <Card key={Post.slug_name}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" alt={Post.user} src={Post.user_pic}/>
                }
                title={Post.user}
                subheader={FormateDate(Post.date_edited)}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <h3>{Post.title}</h3>
                    <MDReactComponent text={Post.body.substring(0, 100) + '...'} tags={{h1: 'h4', h2: 'h4', h3: 'h4'}}/>
                </Typography>
            </CardContent>
        </Card>
    )
  }

  render() {

    var posts = [];
    if (this.state && this.state.data && this.state.data.post) {
      for (var post_id in this.state.data.post) {
        var post = this.state.data.post[post_id];
        post.post_id = post_id;
        posts.push(post);
      }
    }

    return (
      <div id="content">
        {
          posts.map(
              post => this.get_post(post)
          )  
        }
      </div>
    );
  }
}

export default FireBlog;

