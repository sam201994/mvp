var SearchBar = (props) => (

	<div>
	 <form onSubmit={props.onSubmit}>
  	 <input type="text" onChange={props.onChangeSearch} value={props.currentMovie} ></input>

  	 <input type="submit" value="Submit" ></input>
	</form>
	</div>
)

window.SearchBar = SearchBar;