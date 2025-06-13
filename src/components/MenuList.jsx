import MenuListData from '../data/menuListData'

export default function MenuList() {
    return (
        <>
            {MenuListData &&
                MenuListData.map((data) => (
                    <div className="menu-list-container" key={data.id}>
                        <h2>{data.cat}</h2>
                        <div className="menu-list-card-container">
                            {
                                data.list && data.list.map((innerData) => (
                                    <div key={innerData.id}>
                                        <div className="menu-card">
                                            <div className="menu-card-content">
                                                <p className='menu-card-title'>{innerData.name}</p>
                                                <p className='menu-card-price'>{innerData.price}</p>
                                                <p className='menu-card-description'>
                                                    {innerData.description}
                                                </p>
                                            </div>
                                            <div className="menu-card-image">
                                                <div className="img-container">
                                                    <img src={innerData.src} alt={innerData.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))

            }
        </>
    )
};