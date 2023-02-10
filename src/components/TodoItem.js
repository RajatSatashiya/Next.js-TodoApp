export default function TodoItem(props) {
  return (
    <>
      <li className="todoItem">
        {props.id}. {props.text}
        <span
          // className={props.status ? "status": "status checkedStatus"}
          className={`status + ${props.status ? "checkedStatus" : ""}`}
          onClick={() => props.changeStatus(props.id)}
        ></span>
      </li>
    </>
  );
}
