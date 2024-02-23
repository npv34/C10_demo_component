function Button(props) {
    return (
        <>
            <button type={props.type} style={{
                    backgroundColor: props.bgcolor,
                    color: props.color,
                    width: props.width + 'px',
                    borderRadius: props.radius + 'px'}}>{props.title}</button>
        </>
    )
}

export default Button;