
const common = {
    enviroments(){
        return [
            {
                name: 'Desenvolvimento',
                value: 1
            },
            {
                name: 'Esteiras',
                value: 2
            },
            {
                name: 'Produção',
                value: 3
            }
        ]
    },
    download(http, pod, namespace){
        console.log('ini', new Date());
        return new Promise((resolve, reject) => {
            http.get(`/get-log-file/${namespace}/${pod.objectMeta.name}/${pod.objectMeta.labels.app}`)
            .then( res => {
                console.log('req completa',  new Date());
                const element = document.createElement('a')
                element.setAttribute('href', `data:text/plain;charset=utf-8, ${encodeURIComponent(res.data)}`)
                element.setAttribute('download', `${pod.objectMeta.name}.log`)
                document.body.appendChild(element)
                element.click()
                console.log('down', new Date());
                resolve()
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export default common;