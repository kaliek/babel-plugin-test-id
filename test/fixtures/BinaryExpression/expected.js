function Foo(a,b) {
    return <div data-component="Foo" data-id={_internal_id}>{a + b}</div>
    var _internal_id = a?._internal_id;
}

const Foo2 = (a,b) => {
    return <div>{a + b}</div>
}