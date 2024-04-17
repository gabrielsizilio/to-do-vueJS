<template>
    <div class="space-y-2">
        <TodoItem v-for="todo in $store.state.todos" :key="todo.id" :todo="todo">
            {{ todo }}
        </TodoItem>
    </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
    components: {
        TodoItem

    },
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped></style>