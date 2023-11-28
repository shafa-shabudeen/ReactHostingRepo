const DisplayName=()=>{
    var name = "Shafa";
    const arr = [1,2,3,4,5];
    const newArr = arr.map((values)=>{
        console.log(values*2);
    })

    const names =['shafa','shamira','zaid','Zihath'];
    const newNames = names.map((n)=>{
        console.log(n);
    })

    newNames ? console.log('True'): console.log('False');

    return(
        <div>
            <h4>Name is : {name}</h4>
        </div>
    )
}

const DisplayArray = () =>{
      const names = ['shafa','shamira','zaid','Zihath'];

      return(
        <div>
            {names.map((n)=>{
                return( <p> My Name is {n}</p> ) ;
            })}
        </div>
      )
}

export default (DisplayName,DisplayArray);