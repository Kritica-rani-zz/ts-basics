import './component.css'
const TableSearch: React.FC = () => {
    return (
        <div className="tableSearch-main">
            <div className="tableSearch-main__title">
                <h2>Post Table</h2>
            </div>
            <div className="tableSearch-main__searchbar">
                <button className="button-refresh">Refresh</button>
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}
export default TableSearch;