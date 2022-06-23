

function Input({inputSearch}){
<input onChange={(e) => inputSearch (e.target.value)}/>

}

export default Input