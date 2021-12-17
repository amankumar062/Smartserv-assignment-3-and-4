export default function Card({ type, amount, title }) {
    return (
        <div className="card">
            <p
                className={
                    type === "revenue"
                        ? "amount revenue"
                        : type === "outstanding"
                        ? "amount outstanding"
                        : "amount"
                }
            >
                {amount}
            </p>
            <p className="title">{title}</p>
        </div>
    );
}
