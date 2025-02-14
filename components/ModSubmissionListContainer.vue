<template>
    <div
        :style="submissionListItemTableColumns"
        :class="`grid grid-cols-5 p-2`"
    >
        <div class="font-bold text-left p-1">
            #
        </div>
        <div class="font-bold text-left p-1">
            {{ $t("modPanelSubmissionList.name") }}
        </div>
        <div class="font-bold text-left p-1">
            {{ $t("modPanelSubmissionList.status") }}
        </div>
        <div class="font-bold text-left p-1">
            {{ $t("modPanelSubmissionList.modified") }}
        </div>
        <div class="font-bold text-left p-1">
            {{ $t("modPanelSubmissionList.submitted") }}
        </div>
        <div
            v-if="hasSubmissions"
            class="grid grid-cols-subgrid col-span-5"
        >
            <div
                v-for="(submission, index) in modSubmissionsStore.submissionsData"
                :key="index"
                class="grid grid-cols-subgrid col-span-5 bg-gray-200"
            >
                <div
                    :data-testid="`mod-submission-list-item-${index + 1}`"
                    class="grid grid-cols-subgrid col-span-5 bg-gray-200 cursor-pointer hover:bg-primary"
                    @click="handleClickToSubmissionForm(submission.id)"
                >
                    <span class="text-start">{{ index + 1 }}</span>
                    <span class="text-start">{{ submission.healthcareProfessionalName }}</span>
                    <span class="text-start">{{ getSubmissionStatus(submission) }}</span>
                    <span class="text-start">{{ convertDateToLocalTime(submission.updatedDate) }}</span>
                    <span class="text-start">{{ convertDateToLocalTime(submission.createdDate) }}</span>
                </div>
            </div>
        </div>
        <div v-else>
            {{ $t("modPanelSubmissionList.noSubmissions") }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { ModerationScreen, useModerationScreenStore } from '~/stores/moderationScreenStore'
import { useModerationSubmissionsStore } from '~/stores/moderationSubmissionsStore'
import type { Submission } from '~/typedefs/gqlTypes'

const { t } = useI18n()

const modScreenStore = useModerationScreenStore()
const modSubmissionsStore = useModerationSubmissionsStore()

onMounted(async () => {
    await modSubmissionsStore.getSubmissions()
})

const hasSubmissions = computed(() => modSubmissionsStore.submissionsData.length > 0)

const getSubmissionStatus = (submission: Submission) => {
    switch (true) {
        case submission.isUnderReview:
            return t('modPanelSubmissionList.underReview')
        case submission.isApproved:
            return t('modPanelSubmissionList.approved')
        case submission.isRejected:
            return t('modPanelSubmissionList.rejected')
        default:
            return t('modPanelSubmissionList.new')
    }
}

const convertDateToLocalTime = (isoString: string) => new Date(isoString).toLocaleString()

const submissionListItemTableColumns = computed(() => {
    const numOfColumns = 5
    const defaultColumnWidth = 10
    const remainingWidth = 100 - defaultColumnWidth
    const columnWidth = remainingWidth / (numOfColumns - 1)
    return `grid-template-columns: ${defaultColumnWidth}% repeat(${numOfColumns - 1}, ${columnWidth}%);`
})

const handleClickToSubmissionForm = (id: string) => {
    useModerationScreenStore().setActiveScreen(ModerationScreen.editSubmission)
    modScreenStore.selectedSubmissionId = id
}
</script>
