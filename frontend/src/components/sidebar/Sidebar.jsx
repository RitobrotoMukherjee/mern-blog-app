import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="SidebarItem">
                <h3 className="SidebarTitle">About Me</h3>
                <div className="SidebarimageHolder">
                    <img className='SidebarImage' src="https://drive.google.com/uc?id=1pfygxWytgl-oEnVEhSW4RSbg-3uvCOBx" alt="Ritobroto" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus ullam eum officiis iste fugiat?</p>
            </div>
            <div className="SidebarItem">
                <h3 className="SidebarTitle">Tags</h3>
                <ul className="CategoryList">
                    <li className="CategoryListItems">Technology</li>
                    <li className="CategoryListItems">Science</li>
                    <li className="CategoryListItems">Arts</li>
                    <li className="CategoryListItems">Humanity</li>
                    <li className="CategoryListItems">Geo Politics</li>
                    <li className="CategoryListItems">Sports</li>
                </ul>
            </div>
        </div>
    )
}