import { Outlet } from "react-router"

function StaticLayout() {
  return (
    <div>
     {/* Header */}
   
     <Outlet/>
     
     {/* Footer */}
    

    </div>
  )
}

export default StaticLayout