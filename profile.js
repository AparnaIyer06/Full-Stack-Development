const user={
    name: 'Aparna Iyer',
    imageUrl: 'https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png',
    imageSize: 99
}

export default function Profile(){

    return(
        <div>
            <h1>{user.name}</h1>
            <img className="" src={user.imageUrl} alt={'Food liked by '+user.name}
            style={{width:user.imageSize,
                height: user.imageSize}}/>

        </div>
    )
}