type AccardionPropsType = {
    titleValue: string;
}
function Accardion(props: AccardionPropsType) {
    return (
        <div>
            <AccardionTitle title={props.titleValue} />
            <AccardionBody />
        </div>
    );
}

type AccardionTitlePropsType = {
    title: string;
}
function AccardionTitle(props: AccardionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccardionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default Accardion;