

class App extends React.Component {

	constructor(props) {
		//console.log("ola");
		super(props);
		this.state = {search: '',items: [], text:''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleSubmitAdd = this.handleSubmitAdd.bind(this);




	}
	 handleChange(event) {
	 	 event.preventDefault();
	 	this.setState({search: event.target.value});

	 }
	 handleAdd(e) {
 		e.preventDefault();
	 	this.setState({text: e.target.value});
	 }
	 handleSubmit(event) { event.preventDefault();
	 	console.log("here");
	 	var userInput= this.state.search;
	 	var ActualList = this.props.moviesArray;

	 	if(ActualList.indexOf(userInput)!==-1)
			alert('MOVIE FOUND: ', this.state.search);
    	else
    		alert('Movie not found');
	 }
	  handleSubmitAdd(e) {
	  	 e.preventDefault();
    	var newItem = this.state.text;
    	this.setState((prevState) => ({
     	 items: prevState.items.concat(newItem),
     	 text: ''
    	}));

  	 }
	 // handleAdd() {

	 // }


	render() {
	 return ( 
	  <div>
 		 <h1>NOTES</h1>
  			<MovieList movies={this.state.items}
  			 currentMovie={this.state.search} 
  			 onChangeSearch={this.handleChange} 
  			 onSubmit={this.handleSubmit}
  			 movieToAdd={this.state.text}
  			 onAdd={this.handleAdd} 
  			 handleSubmitAdd={this.handleSubmitAdd} 
  			 />
  	  </div> 
      )
	}
}



ReactDOM.render(<App moviesArray={['kuch kuch hota hai', 'iron man', 'harry potter']} />, document.getElementById("app"))




//ReactDOM.render(<h1>hello</h1>, document.getElementById("app"))





