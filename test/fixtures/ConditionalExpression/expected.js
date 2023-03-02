const Foo = ({ isLoading }) => {
    return isLoading ? <div data-id="Loading">Loading</div> : (
        <div>
            <div data-id="Hi">Hi</div>
            <div data-id="Hello">Hello</div>
        </div>
    )
};

const Loading = () => <Foo isLoading={true} />;

const Loaded = () => <Foo isLoading={false} />;
