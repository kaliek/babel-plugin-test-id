function Foo(a,b) {
    var _internal_id = a?._internal_id;
    return <div data-component="Foo" data-id={_internal_id}>{a + b}</div>
}

const Foo2 = (a,b) => {
    var _internal_id = a?._internal_id;
    return <div  data-component="Foo2" data-id={_internal_id}>{a + b}</div>
}