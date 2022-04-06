import react from 'react'
import './component.css'
function GridView(props: any) {
    const tableData = props.tableData;

    return (
        <div className= 'GridView__main'>
            {tableData && tableData.map((item: any) => {
                return (
                    <div className='GridView__Contents'>
                        <div className='GridView__title'>  {item.title} </div>
                        <div className='GridView__body'> {item.body} </div>

                    </div>
                )
            })

            }
        </div>
    )
}
export default GridView;