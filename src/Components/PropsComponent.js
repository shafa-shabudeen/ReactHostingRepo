const PropsComponent = (props) => {
     console.log(props.name);

     return(
        <div>Props Name is: {props.name}</div>
     )
}

export default PropsComponent;