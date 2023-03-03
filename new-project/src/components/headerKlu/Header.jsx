import { useEffect, useRef, useState } from "react"


export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const [isNotOpen, setIsNotOpen] = useState(false);
    const menuNot = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)){
                setIsMenuOpen(false);
            }
            if (menuNot.current && !menuNot.current.contains(event.target)){
                setIsNotOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
  }, [menuRef, menuNot]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleMenuClickNot = () => {
    setIsNotOpen(!isNotOpen);
};
    
  return (
    <>
    <header className="header">
        <div className="header__container">
            <div className="header__logo icons__pointer">
                <svg width="80" height="42" viewBox="0 0 80 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.9068 41.3152H36.3388V0.03125L30.4009 1.84539V39.8253C30.4009 40.6465 31.0763 41.3152 31.9068 41.3152Z" fill="#203D5C"></path><path d="M17.3303 27.2561L17.842 26.9491C19.9724 25.6792 21.6008 23.908 22.6806 21.6881C23.8428 19.2975 24.3936 16.5999 24.3643 13.4364L24.3545 10.756L18.3711 12.5079L18.2952 14.9564C18.2269 15.7723 18.1596 16.5441 17.997 17.2923C17.3021 20.4772 15.4807 22.3976 12.4212 23.1673C10.577 23.631 8.70904 23.6053 6.73154 23.5806L6.03117 23.5709V0H0V41.357H6.06912V29.0863L6.62854 29.0788C6.88223 29.0756 7.13918 29.0735 7.39287 29.0702C8.67868 29.0552 9.99052 29.0423 11.2904 28.95L11.6222 28.9275L11.8043 29.2023C13.3221 31.4844 14.8703 33.7827 16.3675 36.0058C17.4072 37.5495 18.4469 39.0952 19.4823 40.641C19.8227 41.1509 20.2737 41.3967 20.8624 41.3967H20.9036C21.758 41.3795 22.6426 41.3828 23.4221 41.386H23.5425C23.8265 41.387 24.1095 41.3881 24.3936 41.3881L27.1148 41.3956L26.6551 40.7741L17.3303 27.2561Z" fill="#203D5C"></path><path d="M74.8048 34.916C71.9361 34.916 69.6084 37.2196 69.6084 40.0611C69.6084 40.5602 69.6821 41.0401 69.8166 41.4963H79.793C79.9263 41.0401 80.0001 40.5602 80.0001 40.0611C80.0011 37.2196 77.6756 34.916 74.8048 34.916Z" fill="#FFC857"></path><path d="M47.6977 31.3689V16.2139L41.8931 17.6716V31.3689C41.8931 37.6282 46.2048 42.0004 52.3747 42.0004C54.9344 42.0004 56.9531 41.1373 58.1956 40.4138L59.6646 39.5594V41.5077H65.4692V16.2482L59.6646 17.6351V30.3845C59.6646 34.4959 57.3293 36.9509 53.4198 36.9509C50.0503 36.953 47.6977 34.658 47.6977 31.3689Z" fill="#203D5C"></path></svg>
            </div>
            <div className="header__icons">
                <div className="header__icon icons__pointer" onClick={handleMenuClickNot}>
                    <img src="https://frontv1.b1trus7panel26.com/assets/default.0427e68b.svg" alt="" />
                </div>
                <div className="header__icon icons__pointer" onClick={handleMenuClick}>
                    <img src="https://frontv1.b1trus7panel26.com/assets/default.0427e68b.svg" alt="" />                    
                </div>                        
            </div>
            
            {isNotOpen && (
                <div className="header__menu menu-notif" ref={menuNot}>
                    <div className="header__menu-content menu--2">
                        <h1>Notificaciones</h1>
                    </div>
                </div>
            )}

            {isMenuOpen && (
                <div className="header__menu menu-user" ref={menuRef}>
                    <div className="header__menu-content">
                        <h1>Nombre</h1>
                    </div>
                    <div className="header__menu-content menu-content__hover">
                        <h1>Mis Datos</h1>
                    </div>
                    <div className="header__menu-content menu-content__hover">
                        <h1>Cerrar Sesión</h1>
                    </div>
                    
                    <p>Última sesión: 02/02/2023 5:00:24 PM</p>
                </div>
            )}

        </div>
    </header>
    </>
  )
}
