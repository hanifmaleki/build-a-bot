<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.cost }} {{ part.type }}
        </div>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'PartInfo',
    props: {
        partType: {
            type: String,
        },
        id: {
            type: [Number, String],
            validator(value) {
                return Number.isInteger(Number(value));
            },
        },
    },
    computed: {
        part() {
            const { partType, id } = this;
            return parts[partType].find((part) => part.id === +id);
        }
    },

};
</script>