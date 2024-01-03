function FooterList(props) {
return <>
<div className="footer-list">
    <h3>{props.title}</h3>
    <ul>
        <li>
            <a href="#">{props.link1}</a>
        </li>
        <li>
            <a href="#">{props.link2}</a>
        </li>
        <li>
            <a href="#">{props.link3}</a>
        </li>
        <li>
            <a href="#">{props.link4}</a>
        </li>
        <li>
            <a href="#">{props.link5}</a>
        </li>
    </ul>
</div>
</>
}
export default FooterList