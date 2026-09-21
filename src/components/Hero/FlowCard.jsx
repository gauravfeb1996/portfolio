export function FlowCard({ icon: Icon, title, text, cls }) {
  return (
    <div className={`flow-card ${cls}`}>
      <Icon />
      <div>
        <b>{title}</b>
        <small>{text}</small>
      </div>
    </div>
  );
}
