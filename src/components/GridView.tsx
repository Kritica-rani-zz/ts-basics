import react from 'react'
import './component.css'
function GridView(props: any) {
  
    const {tableData} = props
   

    return (
        <div className= 'gridView__main'>
            {tableData && tableData.map((item: any) => {
                return (
                    <div className='gridView__Contents' key = {props.id}>
                        <div className='gridView__title'>  {item.title} </div>
                        <div className='gridView__body'> {item.body} </div>

                    </div>
                )
            })

            }
        </div>
    )
}
export default GridView;