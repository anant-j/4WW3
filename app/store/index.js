export const state = () => ({
  nightMode: true,
  restaurants: {
    1011:{name:"Lazeez",address:"",phone:"",website:"",hours:"",menu:"",price:"",rating:"",reviews:"",image:"",lat:"",lng:"",id:"1011"},
    2013:{name:"Owsmows",address:"",phone:"",website:"",hours:"",menu:"",price:"",rating:"",reviews:"",image:"",lat:"",lng:"",id:"2013"},
    31:{name:"Pizza Hut",address:"",phone:"",website:"",hours:"",menu:"",price:"",rating:"",reviews:"",image:"",lat:"",lng:"",id:"31"},
    43345:{name:"Basilique",address:"",phone:"",website:"",hours:"",menu:"",price:"",rating:"",reviews:"",image:"",lat:"",lng:"",id:"43345"},
    567574:{name:"Dominos",address:"",phone:"",website:"",hours:"",menu:"",price:"",rating:"",reviews:"",image:"",lat:"",lng:"",id:"567574"},
    54534543:{name:"KFC",address:"",phone:"",website:"",hours:"",menu:"",price:"",rating:"",reviews:"",image:"",lat:"",lng:"",id:"54534543"},
    3:{name:"Ginos",address:"",phone:"",website:"",hours:"",menu:"",price:"",rating:"",reviews:"",image:"",lat:"",lng:"",id:"54534543"},
  },
})

export const mutations = {
  toggleDarkMode(state) {
    state.nightMode = !state.nightMode;
  },
}
