const Dog = ( props ) =>
{
    return (
        <> 
    <p>Name: {props.name}</p>
    <p>Age: { props.age}</p>
    <img src={props.imageUrl} />
       </>     
    )
}
export default Dog
 /*<> </> esto es un fragment, ya que en jsx solo permite dos pares,
 y si no se pusiesen las etiquetas saldría error */