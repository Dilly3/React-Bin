import PropTypes from 'prop-types'


let Header = (props)=>{
    return (
        <header>
            <div className='container'>
                <h2>{props.text}</h2>
            </div>
        </header>
    )
}

Header.propTypes = {
    text : PropTypes.string
}

export default Header

