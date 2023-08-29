import Event from "../pages/event";
function Layout(props){
return (
           <>
           <Event/>
            <div>{props.children}</div>
           </>
        
    )
}
export default Layout;