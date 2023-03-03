function Foo(_internal_param) {
    var _internal_id = _internal_param?._internal_id;
    return <div data-component="Foo" data-id={_internal_id}>{true && false}</div>
};

const Foo2 = () => {
    return <div>{true && false}</div>
};