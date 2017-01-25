// var Cucumbers = () => (
//   <li>cucumbers</li>
// );

// var Kale = () => (
//   <li>kale</li>
// );
// movieToAdd={this.state.text}
//   			 onAdd={this.handleAdd} 
//   			 handleSubmitAdd={this.handleSubmitAdd} 
//<SearchBar currentMovie={props.currentMovie} onChangeSearch={props.onChangeSearch} onSubmit={props.onSubmit}/>
var MovieListEntry = (props) => (

	<li>{props.movieName}</li>
)

var MovieList = (props) => (
		<div>
			<AddMovie movieToAdd={props.movieToAdd} onAdd={props.onAdd} handleSubmitAdd={props.handleSubmitAdd}/>
		
	  		<ul>
       	 	{
       	 		
        		props.movies.map(function(movie, key){
        		return (<MovieListEntry movieName={movie} key={key}/>);
        		})
         	}
       		</ul>
      	</div>
)


window.MovieList= MovieList;