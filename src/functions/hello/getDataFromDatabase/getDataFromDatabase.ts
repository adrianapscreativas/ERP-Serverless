import user from '../../../../models/user'

const getDataFrombatabase = async (limit:number ,page: number, params:object)=> {

    return await user.findAllcount()
}