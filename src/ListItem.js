function ListItem(props){
    return(
        <div>
            <div style={props.element.status ? {textDecoration: 'line-through'} : {}}>
            {props.element.title}
            </div>
            <button onClick={() => props.deleteName(props.element.id)}>Delete</button>
            <button onClick={() => props.done(props.element.id)}>Done</button>
            <button disabled={props.index === 0} onClick={() => props.moveName(props.index, props.index-1)}>Up</button>
            <button disabled={props.index === props.name.length-1} onClick={() => props.moveName(props.index, props.index+1)}>Down</button>
        </div>
    )
}
export default ListItem;