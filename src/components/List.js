import Item from "./Item"

function List (){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="ferrari" lancamento={1958}/>
                <Item marca="Fiat" lancamento={1934}/>
                <Item marca="Celta" lancamento={1998}/>
                <Item marca="Celta" />
            </ul>
        </>
    )
}
export default List