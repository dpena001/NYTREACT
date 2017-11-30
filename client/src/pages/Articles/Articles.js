import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/api";
import {Input,Jtron, List, ListItem, FormBtn, Container,Ito,Heading,Grid,SaveBtn} from "../../components/Main";

class Articles extends Component {
  state = {
    Results: [],
    Articles:[],
    topic: "",
    start: "",
    end: ""
  };

  componentDidMount() {
    this.loadArticles();
    this.loadResults();
  }
 
 loadResults = props => {
    this.setState({ Results:props, topic: "", start: "", end: ""});
 };

 loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ Articles: res.data, topic: "", start: "", end: "" })
      )
      .catch(err => console.log(err));
  };
  
  saveArticle = props => {
    API.saveArticle(props)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.start && this.state.end) {
      API.searchArticles({
        topic: this.state.topic,
        start: this.state.start,
        end: this.state.end
      })
        //.then(res => this.loadArticles())
        .then(res =>this.loadResults(res))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
           <Jumbotron>
              <Jtron><Ito></Ito> New York Times Search</Jtron>
            </Jumbotron>
             <Heading>
                 <h3 className="panel-title">Search Parameters</h3>
                <br></br>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (Required)"
              />
              <Input
                value={this.state.start}
                onChange={this.handleInputChange}
                name="start"
                placeholder="Start Year 'YYYY' (Required)"
              />
              <Input
                value={this.state.end}
                onChange={this.handleInputChange}
                name="end"
                placeholder="End Year 'YYYY' (Required)" 
              />
              <FormBtn
                disabled={!(this.state.topic && this.state.start && this.state.end)}
                onClick={this.handleFormSubmit}
              >
                Search Articles
              </FormBtn>
            </form>
             </Heading>
             <Heading>
             <h3 className="panel-title">Results</h3>
             
              <Grid>
              {this.state.Results ? (
              <List>
                {this.state.Results.map(Results => (
                  <ListItem key={Results._id}>
                    <a href={Results.web_url} target="_blank">
                      <strong>
                        {Results.headline.main}
                      </strong>
                    </a>
                    <SaveBtn onClick={() => this.saveArticle({title:Results.headline.main,
                      date: Results.pub_date,
                      url:Results.web_url})}>
                    Save</SaveBtn>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
           </Grid>
           </Heading> 
            <Heading>
             <h3 className="panel-title">Saved Articles</h3>
              <Grid>
              {this.state.Articles.length ? (
              <List>
                {this.state.Articles.map(Article => (
                  <ListItem key={Article._id}>
                    <a href={Article.url} target="_blank">
                      <strong>
                        {Article.title}
                      </strong> 
                    </a> <br></br>Published on {Article.date} and Saved on {Article.datesaved}
                    <DeleteBtn onClick={() => this.deleteArticle(Article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Saved Article to Display</h3>
            )}
           </Grid>
           </Heading> 
      </Container>
    );
  }
}

export default Articles;
