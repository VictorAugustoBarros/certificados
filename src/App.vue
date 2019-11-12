<template>
    <mdb-container>
        <mdb-row>
            <mdb-col col="sm"></mdb-col>
            <mdb-col col="sm">
                <form>
                    <p class="h4 text-center mb-4">Sign in</p>
                    <div class="grey-text">
                        <mdb-input label="Your email" icon="envelope" type="email"/>
                        <mdb-input label="Your password" icon="lock" type="password"/>
                    </div>
                    <div class="text-center">
                        <mdb-btn color="default" rounded>Default rounded button</mdb-btn>
                    </div>
                </form>
            </mdb-col>
            <mdb-col col="sm"></mdb-col>
        </mdb-row>
    </mdb-container>
</template>

<script>
    import {mdbInput, mdbBtn, mdbContainer, mdbRow, mdbCol} from 'mdbvue';

    export default {
        name: 'Basic',
        components: {
            mdbInput,
            mdbBtn,
            mdbContainer,
            mdbRow,
            mdbCol
        },
    }
</script>
