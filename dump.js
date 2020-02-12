const dump = window.dump = (...data) => {
        data.some(element => console.log(element));
        return void 0
    },
    dd = window.dd = (...data) => {
        dump(...data);
        throw 'Stopped execution because dd(), use dump() if you want to proceed';
    };

export default {dump, dd};
export {dump};
export {dd};