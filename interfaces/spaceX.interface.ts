interface ISpaceXMission {
    mission_name: string,
    launch_date_local: string,
    launch_site: ILaunch_site,
    links: ILinks,
    rocket: IRocket
}


interface ILaunch_site {
    site_name_long: string
}


interface ILinks {
    article_link: null,
    video_link: string
}


interface ICores {
    flight: number,
    core: {
        reuse_count: number,
        status: string
    }
}


 interface IPayloads  {
     payload_type: string,
     payload_mass_kg: number,
     payload_mass_lbs: number
 }


interface IFirst_stage {
    cores: ICores[]
}

interface ISecond_stage {
    payloads: IPayloads[]
}


interface IRocket {
    rocket_name: string,
    first_stage: IFirst_stage,
    second_stage: ISecond_stage
}


export {
    ISpaceXMission
}