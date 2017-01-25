var AddMovie = (props) => (

<div>
 <form onSubmit={props.handleSubmitAdd}>
  	 <input type="text" onChange={props.onAdd} value={props.movieToAdd} ></input>

  	 <input type="submit" value="ADD" ></input>
	</form>
</div>

)


window.AddMovie = AddMovie;