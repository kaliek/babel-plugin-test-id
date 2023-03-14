const LED = ({ color, className }) => {
    var _internal_id = color?._internal_id;  
    return (
        <div className={className} data-component="LED" data-id={_internal_id}>{color}</div>
    );
};