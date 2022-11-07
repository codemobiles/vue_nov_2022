<RouterLink to="/">Home</RouterLink>
<RouterView />
@click
:

v-if
v-model:

props: ["collapsed"],
emits: ["update:collapsed"],
setup
watch
watchEffect

setup(props, { emit }) {
return {
toggleCollapse: function () {
emit("update:collapsed", !props.collapsed);
},
onClickLogOff: function () {
store.dispatch("doLogout");
},
};
},

---

```
const formState: UnwrapRef<FormState> = reactive({
      username: "admin",
      password: "1234",
    });
    const handleFinish: FormProps["onFinish"] = (values) => {
      store.dispatch({ type: "doLogin", ...formState });
    };
    const handleFinishFailed: FormProps["onFinishFailed"] = (errors) => {
      alert(JSON.stringify(errors));
    };
```
