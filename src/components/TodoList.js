import TodoItem from "./TodoItem";

export default function TodoList(props) {
  let data = JSON.stringify(props.listitem);
  data = JSON.parse(data);

  const displayList = data.map((item, index) => (
    // <TodoItem key={index} item={item} changeStatus={changeStatus} />
    <TodoItem {...item} key={index} changeStatus={props.changeStatus} />
  ));

  return (
    <>
      <ul className="todoList">{displayList}</ul>
    </>
  );
}
