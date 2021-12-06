import PropTypes from 'prop-types'

function Item ({ marca, lancamento }){
    return (
        <>
            <ul>
                <li> {marca} - {lancamento} </li>
            </ul>
        </>
    )
}

Item.propTypes = {
    maarca: PropTypes.string.isRequired,
    lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca!',
    lancamento: 'Faltou o ano de lançamento!'
}
export default Item