<template>
    <form
        class="p-4 h-full overflow-y-auto"
        @submit="validateFields"
    >
        <div>
            <span class="mb-3.5 text-center text-primary-text text-2xl font-bold font-sans leading-normal">
                {{ $t('modSubmissionForm.contactInformation') }}
            </span>
            <ModInputField
                data-testid="submission-form-nameEn"
                :label="$t('modSubmissionForm.labelFacilityNameEn')"
                type="text"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityNameEn')"
                :required="true"
                :input-validation-check="validateNameEn"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityNameEn')"
            />
            <ModInputField
                data-testid="submission-form-nameJp"
                :label="$t('modSubmissionForm.labelFacilityNameJp')"
                type="text"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityNameJp')"
                :required="true"
                :input-validation-check="validateNameJp"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityNameJp')"
            />
            <ModInputField
                data-testid="submission-form-phone"
                :label="$t('modSubmissionForm.labelFacilityPhoneNumber')"
                type="text"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityPhoneNumber')"
                :required="true"
                :input-validation-check="validatePhoneNumber"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityPhoneNumber')"
            />
            <ModInputField
                data-testid="submission-form-email"
                :label="$t('modSubmissionForm.labelFacilityEmail')"
                type="email"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityEmail')"
                :required="false"
                :input-validation-check="validateEmail"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityEmail')"
            />
            <ModInputField
                data-testid="submission-form-website"
                :label="$t('modSubmissionForm.labelFacilityWebsite')"
                type="url"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityWebsite')"
                :required="false"
                :input-validation-check="validateWebsite"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityWebsite')"
            />
        </div>

        <div>
            <span class="mb-3.5 text-center text-primary-text text-2xl font-bold font-sans leading-normal">
                {{ $t('modSubmissionForm.addresses') }}
            </span>
            <ModInputField
                data-testid="submission-form-postalCode"
                :label="$t('modSubmissionForm.labelFacilityPostalCode')"
                type="text"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityPostalCode')"
                :required="true"
                :input-validation-check="validatePostalCode"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityPostalCode')"
            />
            <div class="flex flex-col mt-4">
                <label
                    for="Prefecture Japan"
                    class="mb-2 text-primary-text text-sm font-bold font-sans"
                >{{ $t('modSubmissionForm.labelFacilityPrefectureEn') }}</label>
                <select
                    id="1"
                    v-model="store.prefectureEn"
                    data-testid="submission-form-prefectureEn"
                    name="Prefecture Japan"
                    class="mb-5 px-3 py-3.5 w-96 h-12 bg-white rounded-lg border border-primary-text-muted
                text-primary-text text-sm font-normal font-sans placeholder-primary-text-muted"
                >
                    <option
                        v-for="(prefecture, index) in store.listPrefectureJapanEn"
                        :key="index"
                    >
                        {{ prefecture }}
                    </option>
                </select>
            </div>
            <ModInputField
                data-testid="submission-form-cityEn"
                :label="$t('modSubmissionForm.labelFacilityCityEn')"
                type="text"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityCityEn')"
                :required="true"
                :input-validation-check="validateCityEn"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityCityEn')"
            />
            <ModInputField
                data-testid="submission-form-addressLine1En"
                :label="$t('modSubmissionForm.labelFacilityAddressLine1En')"
                type="text"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityAddressLine1En')"
                :required="true"
                :input-validation-check="validateAddressLineEn"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityAddressLine1En')"
            />
            <ModInputField
                data-testid="submission-form-addressLine2En"
                :label="$t('modSubmissionForm.labelFacilityAddressLine2En')"
                type="text"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityAddressLine2En')"
                :required="true"
                :input-validation-check="validateAddressLineEn"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityAddressLine2En')"
            />
            <div class="flex flex-col mt-4">
                <label
                    for="Prefecture Japan"
                    class="mb-2 text-primary-text text-sm font-bold font-sans"
                >{{ $t('modSubmissionForm.labelFacilityPrefectureJp') }}</label>
                <select
                    id="1"
                    v-model="store.prefectureJp"
                    data-testid="submission-form-prefectureJp"
                    name="Prefecture Japan"
                    class="mb-5 px-3 py-3.5 w-96 h-12 bg-white rounded-lg border border-primary-text-muted
                text-primary-text text-sm font-normal font-sans placeholder-primary-text-muted"
                >
                    <option
                        v-for="(prefecture, index) in store.listPrefectureJapanJp"
                        :key="index"
                    >
                        {{ prefecture }}
                    </option>
                </select>
            </div>
            <ModInputField
                data-testid="submission-form-cityJp"
                :label="$t('modSubmissionForm.labelFacilityCityJp')"
                type="text"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityCityJp')"
                :required="true"
                :input-validation-check="validateCityJp"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityCityJp')"
            />
            <ModInputField
                data-testid="submission-form-addressLine1Jp"
                :label="$t('modSubmissionForm.labelFacilityAddressLine1Jp')"
                type="text"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityAddressLine1Jp')"
                :required="true"
                :input-validation-check="validateAddressLineJp"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityAddressLine1Jp')"
            />
            <ModInputField
                data-testid="submission-form-addressLine2Jp"
                :label="$t('modSubmissionForm.labelFacilityAddressLine2Jp')"
                type="text"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityAddressLine2Jp')"
                :required="true"
                :input-validation-check="validateAddressLineJp"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityAddressLine2Jp')"
            />
        </div>

        <div>
            <span class="mb-3.5 text-center text-primary-text text-2xl font-bold font-sans leading-normal">
                {{ $t('modSubmissionForm.googleMapsInformation') }}
            </span>
            <ModInputField
                data-testid="submission-form-google-maps"
                :label="$t('modSubmissionForm.labelFacilityGoogleMapsUrl')"
                type="url"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityGoogleMapsUrl')"
                :required="true"
                :input-validation-check="validateWebsite"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityGoogleMapsUrl')"
            />
            <ModInputField
                data-testid="submission-form-mapLatitude"
                :label="$t('modSubmissionForm.labelFacilityMapLatitude')"
                type="text"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityMapLatitude')"
                :required="true"
                :input-validation-check="validateFloat"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityMapLatitude')"
            />
            <ModInputField
                data-testid="submission-form-mapLongitude"
                :label="$t('modSubmissionForm.labelFacilityMapLongitude')"
                type="text"
                :placeholder="$t('modSubmissionForm.placeholderTextFacilityMapLongitude')"
                :required="true"
                :input-validation-check="validateFloat"
                :invalid-input-error-message="$t('modSubmissionForm.inputErrorMessageFacilityMapLongitude')"
            />
        </div>
        <ModHealthcareProfessionalSearchbar
            data-testid="submission-form-doctor-search"
        />
        <!-- This button is pure for testing -->
        <button
            type="submit"
            class="bg-currentColor text-white font-bold py-2 px-4 rounded"
        >
            submit
        </button>
    </form>
</template>

<script lang="ts" setup>
import { useModerationFormInputStore } from '~/stores/moderationFormInputStore'
import { validateAddressLineEn, validateAddressLineJp, validateNameEn, validateNameJp, validatePhoneNumber, validateCityEn, validateEmail, validateFloat, validatePostalCode, validateWebsite, validateCityJp } from '~/utils/formValidations'

const store = useModerationFormInputStore()

const validateFields = (e: Event) => {
    e.preventDefault()

    const isNameEnValid: boolean = validateNameEn(store.nameEn)
    const isNameJpValid: boolean = validateNameJp(store.nameJp)
    const isPhoneValid: boolean = validatePhoneNumber(store.phone)
    const isEmailValid: boolean = validateEmail(store.email)
    const isWebsiteValid: boolean = validateWebsite(store.website)
    const isAddressLine1EnValid: boolean = validateAddressLineEn(store.addressLine1En)
    const isAddressLine2EnValid: boolean = validateAddressLineEn(store.addressLine2En)
    const isAddressLine1JpValid: boolean = validateAddressLineJp(store.addressLine1Jp)
    const isAddressLine2JpValid: boolean = validateAddressLineJp(store.addressLine2Jp)
    const isCityEnValid: boolean = validateCityEn(store.cityEn)
    const isCityJpValid: boolean = validateCityJp(store.cityJp)
    const isPostalCodeValid: boolean = validatePostalCode(store.postalCode)
    const isLatitudeValid: boolean = validateFloat(store.mapLatitude)
    const isLongitudeValid: boolean = validateFloat(store.mapLongitude)

    if (
        !isNameEnValid ||
        !isNameJpValid ||
        !isPhoneValid ||
        !isEmailValid ||
        !isWebsiteValid ||
        !isAddressLine1EnValid ||
        !isAddressLine2EnValid ||
        !isAddressLine1JpValid ||
        !isAddressLine2JpValid ||
        !isCityEnValid ||
        !isCityJpValid ||
        !isPostalCodeValid ||
        !isLatitudeValid ||
        !isLongitudeValid
    ) {
        e.preventDefault()
        return
    }

    store.resetForm()
    console.log('Fetching data')
}
</script>
