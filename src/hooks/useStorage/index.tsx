import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()

function useStorage() {
    function set(key, value) {
        storage.set(key, value)
    }

    function get(key, type='string') {
        switch (type) {
            case 'string':
                return storage.getString(key)
            case 'number':
                return storage.getNumber(key)
            case 'boolean':
                return storage.getBoolean(key)
        }
    }

    function exists(key) {
        return storage.contains(key)
    }

    function clear(key) {
        storage.delete(key)
    }

    function clearAll() {
        storage.clearAll()
    }

    return {
        Storage: {
            set, get, exists, clear, clearAll
        }
    }
}

export { useStorage }